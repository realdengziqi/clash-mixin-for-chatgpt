# Clash for Windows Mixin 注入脚本
[English](README.md)

这是一个用于Clash for Windows的Mixin注入脚本。它的主要功能是自动创建一个名为"美国"的代理组，将所有包含"🇺🇸"标志的代理添加到这个组中，并设置一系列特定域名的路由规则，以确保所有访问 ChatGPT 相关网站的流量都通过美国节点。

## 用法

1. 打开 Clash for Windows。

2. 在应用中找到并打开配置页面。

3. 在 Mixin 配置中，粘贴此脚本。

该脚本将自动创建一个名为"美国"的代理组，并将所有包含 "🇺🇸" 标志的代理添加到这个组中。然后，它将设置一系列特定域名的路由规则，这些规则将流量引导至 "美国" 代理组。

注意，此脚本只在配置名为 "WD_Trojan" 时起作用。如果你的配置名不是 "WD_Trojan"，脚本将不会做任何更改。

## 路由规则

脚本设置的路由规则包括：

- `openai.com`
- `ai.com`
- `challenges.cloudflare.com`
- `stripe.com`
- `auth0.com`
- `arkoselabs.com`
- `openaiapi-site.azureedge.net`

所有这些域名的流量将被引导至 "美国" 代理组。特别是与ChatGPT相关的流量，都将通过美国节点，这可能会有助于提高访问速度和稳定性。