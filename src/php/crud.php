<?

$file = '../json/text.txt';

file_put_contents('test.txt', file_get_contents('php://input'));

echo 'Enviado com sucesso';