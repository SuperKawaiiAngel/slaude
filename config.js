const config = {
    TOKEN: "xoxc-8890193198800-8890193215376-8890314519856-6f4000948eda097164ccdfc7ba7efe8eac95d7d24ca773c68d3a7a35b089b466",
    COOKIE: "xoxd-OfzZHXQStOtpr2hJu%2BGf%2FjAxylSMxbG7Jw8tfSi8ShS%2FfCv0JLwUMkgIN0esEp%2Bn6qtDhc1JU0f68xMwq7r4WP6Di%2F998TVrqrVZ0sxvkBCNQj8B3r2TYNcf22cNddniqqJODeikNGN%2FYa0XmVuWTCCSM0D91fMMNr2RIAGUit9nXs3WLGVOc50DeNw%2FMvRPgaDVPbc%3D",
    TEAM_ID: "w1746727418-ise193195",
    CHANNEL: "C08RVTEH83T",
    CLAUDE_USER: "U08RBKCCHN2",

    MAINPROMPT_LAST: false, // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: false, // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: true,

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: "Assistant:",

    PORT: 5004
}

export default config;
