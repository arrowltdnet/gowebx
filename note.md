https://go101.org/apps-and-libs/golds.html

```bash
godoge -gen -dir=./generated -compact
cd docs_gen/ && node server.js
cp ./docs_gen/style.css ./generated/

# https://stackoverflow.com/questions/18817744/change-all-files-and-folders-permissions-of-a-directory-to-644-755
find . -type d -print0 | xargs -0 chmod 0755
find . -type f -print0 | xargs -0 chmod 0644

# config nginx
# https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/
sudo htpasswd -c /etc/nginx/conf.d/.gowebx_htpasswd arrowltd # web123
# add to config file
# auth_basic           "Administrator’s Area";
# auth_basic_user_file /etc/nginx/conf.d/.gowebx_htpasswd;
```
