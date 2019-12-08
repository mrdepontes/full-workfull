# Pratical Workflow For A Simple Project 

## App CRA React Application
```bash
$ npm install create-react-app

$ export REACT_APP_ENV=dev

$ printenv | grep "REACT_APP_ENV"
REACT_APP_ENV=dev
```

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

## Pipeline Setup (windows)

### Trivis CI
Dependencies on on Ruby and Travis CLI

[Travis](https://github.com/travis-ci/travis.rb#installation)
```bash
> cmd travis version
@link - https://travis-ci.org/
```


[Ruby](http://www.ruby-lang.org/en/documentation/installation/#rubyinstaller)
```bash
> 1 - MSYS2 base installation
Start Ruby CMD
ruby 2.6.5p114 (2019-10-01 revision 67812) [x64-mingw32]
```

```bash
C:\Users\Administrator>
> ruby -v
> gem install travis -v 1.8.10 
> travis version
```

[Ruby Installer (windows)](https://rubyinstaller.org/downloads/)



## Build Docker Application
Docker Image has been linked to a Github to create builds after comit to master

```bash
$ docker build -t agrochief/frontend .
```
## Run Docker Applciation

### Deploy to Digital Ocean
This application was set up in [Digital Ocean](https://cloud.digitalocean.com/droplets?i=dd3e18&preserveScrollPosition=false)  and used a [Docker Hub](https://hub.docker.com/r/agrochief/frontend) to store the images

SSH to digital ocean instance

```bash
# example
$ ssh root@162.243.169.174

$ docker images 

REPOSITORY          TAG     IMAGEID     CREATED         SIZE
agrochief/frontend  latest  afecefo9    4 minutes ago   1.08GB
agrochief/frontend  <none>  e626700     4 weeks ago     1.08GB

$ docker run -e REACT_APP_ENV=prod -d -p 3000:3000 -it --rm agrochief/frontend

$ docker container ls
```

## CI Travis
[Travis CI](https://travis-ci.org/account/repositories)


## References
[Github](https://github.com/)

[Travis](https://travis-ci.org/)

Changing Repo Status

https://help.github.jp/enterprise/2.11/user/articles/making-a-private-repository-public/

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

```bash
# todo move to script file
# Output to zip file
$ gzip -R <filename>
```