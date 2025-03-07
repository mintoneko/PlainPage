---
title: "快捷ssh密钥登陆"
description: "使用密钥认证快捷ssh登陆，且关闭密码认证"
pubDate: "Jan 16 2025"
updatedDate: "Jan 16 2025"
hide: false
tags:
  - VPS
---

1. 配置公钥和私钥

   ```bash
   ssh-keygen -t rsa -C '-C这里用来添加你的注释信息'
   ```

2. 传输公钥

   ```bash
   scp ~/.ssh/id_rsa.pub <用户名>@<ip地址>:/home/id_rsa.pub
   ```

3. 添加权限

   ```bash
   mkdir -p ~/.ssh && chmod 700 ~/.ssh 
   cat /home/id_rsa.pub >> ~/.ssh/authorized_keys 
   chmod 600 ~/.ssh/authorized_keys
   ```

4. 本地配置用户

   ```bash
   vim  ~/.ssh/config
   
   # 模版如下
   Host host_name
     HostName host_ip
     User root
     Port 22
     IdentityFile ~/.ssh/id_rsa
   ```

5. SSH服务端

   > vim /etc/ssh/sshd_config
   >
   > 将前面的注释符删掉才能生效。

   ```bash
   PermitRootLogin yes
   PubkeyAuthentication yes
   AuthorizedKeysFile .ssh/authorized_keys
   # 只接收公钥认证
   PasswordAuthentication no
   systemctl restart sshd
   ```

### 