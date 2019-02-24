package com.me4502.emojify;

import com.me4502.emojify.app.EmojiApp;

import java.io.IOException;

public class Emojify {

    public static void main(String[] args) {
        try {
            EmojiApp.getInstance().load();
        } catch (IOException e) {
            // If an exception makes it here, runtime.
            throw new RuntimeException(e);
        }
    }
}
