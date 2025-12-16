<?php
/**
 * Contact Form Handler für kaydietrich.de
 * 
 * Verarbeitet Kontaktformular-Anfragen mit:
 * - CORS-Header für kaydietrich.de
 * - Input-Sanitization & Validation
 * - Honeypot-Spam-Protection
 * - JSON-Response für Frontend
 * 
 * @version 1.0
 * @author Kay Dietrich
 */

// JSON Response & CORS Headers
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://kaydietrich.de');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false, 
        'message' => 'Nur POST-Anfragen erlaubt'
    ]);
    exit();
}

// Get POST data (JSON from fetch API)
$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

// Check if JSON is valid
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Ungültige JSON-Daten'
    ]);
    exit();
}

// Validate required fields
$requiredFields = ['name', 'email', 'message'];
foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode([
            'success' => false, 
            'message' => "Pflichtfeld fehlt: $field"
        ]);
        exit();
    }
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags(trim($data['name'])), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($data['message'])), ENT_QUOTES, 'UTF-8');

// Optional fields
$company = !empty($data['company']) ? htmlspecialchars(strip_tags(trim($data['company'])), ENT_QUOTES, 'UTF-8') : '';

// Honeypot field (should be empty - bots fill it out)
$honeypot = !empty($data['phone_confirm']) ? trim($data['phone_confirm']) : '';

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Ungültige E-Mail-Adresse'
    ]);
    exit();
}

// Honeypot check - if filled out, it's a bot
if (!empty($honeypot)) {
    // Log spam attempt (optional)
    error_log("Spam detected from IP: " . $_SERVER['REMOTE_ADDR']);
    
    // Return success to fool bot (don't reveal honeypot)
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Nachricht erfolgreich gesendet'
    ]);
    exit();
}

// Additional validation: minimum lengths
if (strlen($name) < 2) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Name zu kurz (min. 2 Zeichen)'
    ]);
    exit();
}

if (strlen($message) < 10) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Nachricht zu kurz (min. 10 Zeichen)'
    ]);
    exit();
}

// Prepare email
$to = 'kontakt@kaydietrich.de';
$subject = "Kontaktanfrage von $name";

// Email body (plain text)
$emailBody = "Neue Kontaktanfrage über kaydietrich.de\n";
$emailBody .= str_repeat("=", 50) . "\n\n";
$emailBody .= "Name:         $name\n";
$emailBody .= "E-Mail:       $email\n";

if (!empty($company)) {
    $emailBody .= "Unternehmen:  $company\n";
}

$emailBody .= "\n" . str_repeat("-", 50) . "\n\n";
$emailBody .= "Nachricht:\n\n$message\n\n";
$emailBody .= str_repeat("=", 50) . "\n";
$emailBody .= "Gesendet am:  " . date('d.m.Y H:i:s') . "\n";
$emailBody .= "IP-Adresse:   " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers (RFC 2822 compliant)
$headers = "From: Kay Dietrich Website <noreply@kaydietrich.de>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    // Success response
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich schnellstmöglich bei Ihnen.'
    ]);
    
    // Optional: Log successful submission
    error_log("Contact form submitted successfully from: $email");
    
} else {
    // Error response
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut oder senden Sie eine E-Mail direkt an kontakt@kaydietrich.de'
    ]);
    
    // Log error
    error_log("Failed to send contact form email from: $email");
}
?>