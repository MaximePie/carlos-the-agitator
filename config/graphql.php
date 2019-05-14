<?php
use App\GraphQL\Query\UsersQuery;
use App\GraphQL\Type\UsersType;
return [
    'prefix' => 'graphql',
    'routes' => 'query/{graphql_schema?}',
    'controllers' => \Rebing\GraphQL\GraphQLController::class . '@query',
    'middleware' => [],
    'default_schema' => 'default',
    // register query
    'schemas' => [
        'default' => [
            'query' => [
                'users' => UsersQuery::class,
            ],
            'mutation' => [
            ],
            'middleware' => []
        ],
    ],
    // register types
    'types' => [
        'users'  => UsersType::class,
    ],
    'error_formatter' => ['\Rebing\GraphQL\GraphQL', 'formatError'],
    'params_key'    => 'params'
];