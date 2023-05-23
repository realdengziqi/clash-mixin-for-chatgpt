
# Clash for Windows Mixin Injection Script
[中文](README_ZH.md)
This is a Mixin injection script for Clash for Windows. The main purpose of this script is to automatically create a proxy group called "United States", add all proxies marked with "🇺🇸" into this group, and set up routing rules for a series of specific domains, ensuring all traffic accessing ChatGPT-related websites goes through the U.S. nodes.

## Usage

1. Open Clash for Windows.

2. Navigate to and open the configuration page in the application.

3. In the Mixin configuration, paste this script.

This script will automatically create a proxy group called "United States" and add all proxies with the "🇺🇸" flag into this group. Then, it sets up a series of specific domain routing rules to direct traffic to the "United States" proxy group.

Please note that this script will only take effect if the configuration name is "WD_Trojan". If your configuration name is not "WD_Trojan", the script will not make any changes.

## Routing Rules

The routing rules set by the script include:

- `openai.com`
- `ai.com`
- `challenges.cloudflare.com`
- `stripe.com`
- `auth0.com`
- `arkoselabs.com`
- `openaiapi-site.azureedge.net`

All traffic from these domains will be directed to the "United States" proxy group. Specifically, traffic related to ChatGPT will pass through U.S. nodes, which might help improve access speed and stability.