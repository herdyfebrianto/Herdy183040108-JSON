<?php

$mahasiswa = [
    [
        "nama" => "herdy",
        "nrp" => "183040108",
        "email" => "herdy@gmail.com"
    ],
    [
        "nama" => "imam",
        "nrp" => "183040108",
        "email" => "imam@gmail.com"
    ]
];

// $dbh = new PDO('mysql:host=localhost;dbname=mahasiswa', 'root', '123');
// $db = $dbh->prepare('SELECT * FROM mhs');
// $db->execute();
// $mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;
