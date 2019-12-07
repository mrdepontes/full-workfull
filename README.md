# Pratical workflow for a simple project 

## App CRA React Application

## Run Scripts

### Build ( Production )
```bash
$ npm run build
```

### Stage
```bash
$ npm run build:staging
```

### Production
```bash
$ npm run build:production
```

### Start App
```bash
$ npm start
```

## Tests
```bash
$ npm test
```


```bash
# todo move to script file
# Output to zip file
$ gzip -R <filename>
```
## Pipeline Setup (windows)

### Trivis CI
Dependencies on on Ruby and Travis CLI

Travis
https://github.com/travis-ci/travis.rb#installation
> cmd travis version
@link - https://travis-ci.org/


Ruby 
http://www.ruby-lang.org/en/documentation/installation/#rubyinstaller
>   1 - MSYS2 base installation
Start Ruby CMD
ruby 2.6.5p114 (2019-10-01 revision 67812) [x64-mingw32]

C:\Users\Administrator>
> ruby -v
> gem install travis -v 1.8.10 
> travis version

Ruby Installer (windows)
https://rubyinstaller.org/downloads/



### Deploy to Digital Ocean
Connect with ...
```bash
$ sftp root@162.243.169.174:/usr/local/src/www/
Connected to 162.243.169.174.
Changing to: /usr/local/src/www/
```
Upload files with sftp 
```bash
sftp> put <filename>
Example "app-front-end.tar.gz"
sftp> ls -la
drwxr-xr-x    2 root     root         4096 Dec  6 21:06 .
drwxr-xr-x    3 root     root         4096 Dec  6 21:05 ..
-rw-r--r--    1 root     root            0 Dec  6 21:06 README.md
```

SSH to host 

Unzip with gunzip

## Build Docker Application

## Docker Applciation

## CI Travis


## References
https://github.com/
https://travis-ci.org/

Changing Repo Status
https://help.github.jp/enterprise/2.11/user/articles/making-a-private-repository-public/