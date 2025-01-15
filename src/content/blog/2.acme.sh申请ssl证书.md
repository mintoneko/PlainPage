---
title: "acme.sh申请ssl证书"
description: "简述acme.sh申请ssl证书，并不适合大多数人。"
pubDate: "Jan 16 2025"
updatedDate: "Jan 16 2025"
hide: false
tags:
  - 建站
---

- 安装acme.sh

```bash
curl https://get.acme.sh | bash

# 邮箱注册
acme.sh --register-account -m youremail@gmail.com

# 切换ca服务商
acme.sh --set-default-ca  --server  letsencrypt
```

- 域名验证

HTTP验证

```bash
acme.sh --issue --standalone -d example.com -d www.example.com -k ec-256
```

DNS验证

```bash
# 执行此命令设置变量的值，acme.sh脚本执行过程会读取
export CF_Token="example"
export CF_Account_ID="example"
export CF_Zone_ID="example"   # 此项非必须，上面两项需要提供

# 申请证书
acme.sh --issue -d www.example.com -d example.com --dns dns_cf -k ec-256
```

- 配置证书至 Nginx

导出 key 和 pem 两文件。

```bash
acme.sh --install-cert -d example.com \
--key-file /root/.certs/example.com/example.com.key \
--fullchain-file /root/.certs/example.com/example.com.pem \
--reloadcmd "systemctl reload nginx"
```

- 修改nginx配置

```nginx
server {
  listen 80;
  server_name example.com www.example.com;
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl;
  server_name example.com www.example.com;

  ssl_certificate /root/.certs/example.com/example.com.pem;
  ssl_certificate_key /root/.certs/example.com/exaample.com.key;

  location / {
      root /var/www/html;
      try_files $uri $uri/ =404;
  }
}
```

> 本身比较简单，不过网上大多数博客都写的太烂了。我这篇文章写得过于简洁，只看小列表即可，懂个大概，那么基本上就没什么问题了。