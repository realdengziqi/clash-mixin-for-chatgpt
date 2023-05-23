module.exports.parse = ({content,name,url},{yaml,axios,notify}) => {
    if (name == "WD_Trojan"){
        const proxyGroup = {
            name: '美国',
            type: 'select',
            proxies: []
        }

        for (p of content['proxies']){
            if (p.name.includes('🇺🇸')){
                proxyGroup.proxies.push(p.name)
            }
        }

        content['proxy-groups'].push(proxyGroup)
        let matchRule = content['rules'].pop()
        content['rules'].push('DOMAIN-SUFFIX,openai.com,美国')
        content['rules'].push('DOMAIN-SUFFIX,ai.com,美国')
        content['rules'].push('DOMAIN-SUFFIX,challenges.cloudflare.com,美国')
        content['rules'].push('DOMAIN-SUFFIX,stripe.com,美国')
        content['rules'].push('DOMAIN-SUFFIX,auth0.com,美国')
        content['rules'].push('DOMAIN-SUFFIX,arkoselabs.com,美国')
        content['rules'].push('DOMAIN-SUFFIX,openaiapi-site.azureedge.net,美国')
        content['rules'].push(matchRule)

        return content
    }
    return content

}