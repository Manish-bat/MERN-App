module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Users',
    description: 'User management API',
    contact: {
      email: 'manish.yadav@softuvo.com',
    },
    license: {
      name: '',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000/api/',
      description: 'Local server',
    },
  ],
  security: [
    {
      ApiAuthKey: [],
    },
  ],
  paths: {
    '/auth/getUser': {
      get: {
        tags: ['Users'],
        description: 'Get User',
        parameters: [],

        responses: {
          200: {
            description: 'Users were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#components/schemas/Users',
                },
              },
            },
          },
          400: {
            description: 'Missing parametrs',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Something went wrong',
                  internal_code: 'missing_parameters',
                },
              },
            },
          },
        },
      },
    },
    '/auth/login': {
      post: {
        tags: ['Users'],
        description: 'Login User',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LoginUser',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'User Login Successfully',
          },
          400: {
            description: 'Invalid credentials',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Invalid Credentials',
                  internal_code: 'invalid parameters',
                },
              },
            },
          },
        },
      },
    },
    '/users/register': {
      post: {
        tags: ['Users'],
        description: 'create User',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'New Users were created',
          },
          400: {
            description: 'Invalid Parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'User email already exist',
                  internal_code: 'invalid parameters',
                },
              },
            },
          },
        },
      },
    },
    '/contacts/getContact': {
      get: {
        tags: ['Contacts'],
        description: 'Get Contact',
        parameters: [],

        responses: {
          200: {
            description: 'Contacts were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#components/schemas/Contacts',
                },
              },
            },
          },
          400: {
            description: 'Missing parametrs',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Something went wrong',
                  internal_code: 'missing_parameters',
                },
              },
            },
          },
        },
      },
    },
    '/contacts/createContact': {
      post: {
        tags: ['Contacts'],
        description: 'create Contact',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Contact',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'New Contact were created',
          },
          400: {
            description: 'Invalid Parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'something went wrong',
                  internal_code: 'invalid parameters',
                },
              },
            },
          },
        },
      },
    },
    '/contacts/updateContact/{id}': {
      put: {
        tags: ['Contacts'],
        description: 'update Contact',
        parameters: [
          {
            in: 'path',
            name: 'id',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Contact',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'Contact were updated',
          },
          400: {
            description: 'Invalid Parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'something went wrong',
                  internal_code: 'invalid parameters',
                },
              },
            },
          },
        },
      },
    },
    '/contacts/deleteContact/{id}': {
      delete: {
        tags: ['Contacts'],
        description: 'Delete Contact',
        parameters: [
          {
            in: 'path',
            name: 'id',
          },
        ],
        // requestBody: {
        //   content: {
        //     'application/json': {
        //       schema: {
        //         $ref: '#/components/schemas/Contact',
        //       },
        //     },
        //   },
        //   required: true,
        // },
        responses: {
          200: {
            description: 'Contact were deleted',
          },
          400: {
            description: 'Invalid Parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'something went wrong',
                  internal_code: 'invalid parameters',
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Softuvo',
          },
          email: {
            type: 'string',
            example: 'test@test.com',
          },
          password: {
            type: 'string',
            example: '123456',
          },
        },
      },
      LoginUser: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            example: 'test@test.com',
          },
          password: {
            type: 'string',
            example: '123456',
          },
        },
      },
      Users: {
        type: 'object',
        properties: {
          users: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
      Contact: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Softuvo',
          },
          email: {
            type: 'string',
            example: 'softuvo@gmail.com',
          },
          phone: {
            type: 'string',
            example: '123-2324-53245',
          },
          type: {
            type: 'string',
            default: 'personel',
            example: 'personal',
          },
        },
      },
      Contacts: {
        type: 'object',
        properties: {
          contacts: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Contact',
            },
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
          internal_code: {
            type: 'string',
          },
        },
      },
    },
    securitySchemes: {
      ApiAuthKey: {
        type: 'apiKey',
        in: 'header',
        name: 'x-auth-token',
      },
    },
  },
};
