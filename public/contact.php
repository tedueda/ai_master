<?php
// エラー表示設定（本番環境では無効化してください）
error_reporting(E_ALL);
ini_set('display_errors', 0);

// CORS設定
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// POSTリクエストのみ受け付ける
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// フォームデータの取得とサニタイズ
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8') : '';
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8') : '';
$zoom_date = isset($_POST['zoom_date']) ? htmlspecialchars($_POST['zoom_date'], ENT_QUOTES, 'UTF-8') : '';
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8') : '';

// バリデーション
if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => '必須項目が入力されていません']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'メールアドレスが正しくありません']);
    exit;
}

// メール送信先（ここを実際のメールアドレスに変更してください）
$to = 't.ueda@studioq.co.jp';

// メール件名
$subject = '【STUDIO Q クリエイター総合塾】お問い合わせ';

// メール本文
$body = "お問い合わせがありました。\n\n";
$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$body .= "■ お名前\n";
$body .= $name . "\n\n";
$body .= "■ メールアドレス\n";
$body .= $email . "\n\n";

if (!empty($phone)) {
    $body .= "■ 電話番号\n";
    $body .= $phone . "\n\n";
}

if (!empty($zoom_date)) {
    $body .= "■ Zoom希望日時\n";
    $body .= $zoom_date . "\n\n";
}

$body .= "■ お問い合わせ内容\n";
$body .= $message . "\n";
$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$body .= "送信日時: " . date('Y年m月d日 H:i:s') . "\n";

// メールヘッダー
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// メール送信
if (mb_send_mail($to, $subject, $body, $headers)) {
    // 自動返信メール
    $auto_subject = '【STUDIO Q クリエイター総合塾】お問い合わせありがとうございます';
    $auto_body = $name . " 様\n\n";
    $auto_body .= "この度は、STUDIO Q クリエイター総合塾にお問い合わせいただき、誠にありがとうございます。\n\n";
    $auto_body .= "以下の内容でお問い合わせを承りました。\n";
    $auto_body .= "2営業日以内に担当者よりご連絡させていただきます。\n\n";
    $auto_body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $auto_body .= "■ お名前\n";
    $auto_body .= $name . "\n\n";
    $auto_body .= "■ メールアドレス\n";
    $auto_body .= $email . "\n\n";
    
    if (!empty($phone)) {
        $auto_body .= "■ 電話番号\n";
        $auto_body .= $phone . "\n\n";
    }
    
    if (!empty($zoom_date)) {
        $auto_body .= "■ Zoom希望日時\n";
        $auto_body .= $zoom_date . "\n\n";
    }
    
    $auto_body .= "■ お問い合わせ内容\n";
    $auto_body .= $message . "\n";
    $auto_body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    $auto_body .= "※このメールは自動送信されています。\n";
    $auto_body .= "※ご返信いただいても対応できませんのでご了承ください。\n\n";
    $auto_body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $auto_body .= "STUDIO Q クリエイター総合塾\n";
    $auto_body .= "〒556-0003\n";
    $auto_body .= "大阪市浪速区恵美須西3-2-4 2階\n";
    $auto_body .= "TEL: 06-6978-8122\n";
    $auto_body .= "Email: t.ueda@studioq.co.jp\n";
    $auto_body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    
    $auto_headers = "From: t.ueda@studioq.co.jp\r\n";
    $auto_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    mb_send_mail($email, $auto_subject, $auto_body, $auto_headers);
    
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'お問い合わせを受け付けました']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'メール送信に失敗しました']);
}
?>
