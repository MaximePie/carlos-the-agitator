#!/usr/bin/env bash
composer install
npm install
cp .env.example .env
git clone https://github.com/laravel/homestead.git ./Homestead
php artisan key:generate
ssh-keygen -t rsa -C "mykey@example.com"
