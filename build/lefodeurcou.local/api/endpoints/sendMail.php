<?php

	function sendMail()
	{
		$json = [
			'action'	=>	'/v1/send/mail',
			'success'	=>	false,
		];

		if ("false" == ($_POST['honeypot'] ?? "true"))
		{
			$json['success'] = true;
			$json['data'] = $_POST;
		}

		header('Content-Type: application/json');
		echo json_encode($json);
	}

?>