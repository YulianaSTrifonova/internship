import { Express } from "express";
import swaggerJsdoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Book API",
      version: "1.0.0",
      description: "BOOK API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    paths: {
      "/books": {
        get: {
          tags: ["Books"],
          summary: "Return list of books",
          description: "Return list of books",
          "responses": {
              "200": {
                  "description": "OK",
                  "content": {
                      "application/json": {
                          "schema": {
                              "type": "array"
                          }
                      }
                  }
              },
            }
        }
      },
      "books/:id": {
        get: {}
      }
    }
  },
  apis: ["**/*.ts"],
};

const specs = swaggerJsdoc(options);

export default (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
