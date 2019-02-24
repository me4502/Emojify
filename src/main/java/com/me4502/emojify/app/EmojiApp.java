package com.me4502.emojify.app;

import static spark.Spark.port;
import static spark.Spark.redirect;
import static spark.Spark.staticFiles;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import spark.Response;

import java.io.IOException;
import java.util.Map;

public class EmojiApp {

    public static final boolean DEBUG = System.getProperty("debug", "false").equals("true");

    // This is a Singleton class - setup as soon as it's first referenced.
    private static final EmojiApp instance = new EmojiApp();

    // Gson
    private Gson gson = new GsonBuilder().create();

    /**
     * Loads the main app content.
     */
    public void load() throws IOException {
        loadConfigurationAndConnectors();

        loadWebServer();
    }

    /**
     * Load the configuration file and setup the API connectors.
     */
    private void loadConfigurationAndConnectors() {

    }

    /**
     * Helper function to respond with a bad request.
     *
     * @param response The response object
     * @param message The error message
     * @return The json-ified error message
     */
    private String badRequest(Response response, String message) {
        response.status(400);
        response.header("Bad Request", message);
        return gson.toJson(Map.of("error", message));
    }

    /**
     * Setup the webserver configuration and routes.
     */
    private void loadWebServer() {
        port(Integer.parseInt(System.getProperty("emojify.port", "5078")));
        if (DEBUG) {
            // During debug this allows hot-reloading the static changes.
            staticFiles.externalLocation("src/main/resources/static");
        } else {
            staticFiles.location("/static");
        }

        // Setup routes
        redirect.get("/", "index.html");

    }

    /**
     * Gets the Singleton instance of this class
     *
     * @return The instance
     */
    public static EmojiApp getInstance() {
        return EmojiApp.instance;
    }
}
