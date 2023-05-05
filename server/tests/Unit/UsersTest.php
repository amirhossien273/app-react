<?php

test('users', function () {
    $response = $this->get('/');

        $response->assertStatus(200);
});
