# Font Awesome Background Animation Effect

## Install and usage

Installing and running the script, minimalistic. The script does not use build systems and third-party libraries.
Just clone or download the repository. Start local server
(LiveServer plugin for VS Code / [serve](https://github.com/vercel/serve) npm package)
or open index file in browser. That's all...

Clone this repo:
```shell
git clone git@github.com:alekstar79/fa-background.git
```
Go to project directory:
```shell
cd fa-background
```
Start server:
```shell
serve -s .
```

It is also possible to pull the image from the docker hub:
```shell
docker pull alekstar79/fa-background
```
and run:
```shell
docker run -d -p 80:80 -e DOCKER_ENV=true --rm --name fa-background alekstar79/fa-background
```

For ease of use, a Makefile has been created with short commands `pull, run, stop`.

![review](review.gif "FA Background")
