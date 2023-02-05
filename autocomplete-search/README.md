# Autocomplete Search

## Install and usage

Just clone or download this repository. Start local server
(LiveServer plugin for VS Code / [serve](https://github.com/vercel/serve) npm package).
That's all...

Clone this repo:
```shell
git clone git@github.com:alekstar79/autocomplete-search.git
```
Go to project directory:
```shell
cd autocomplete-search
```
Start server:
```shell
serve -s .
```

It is also possible to pull the image from the docker hub:
```shell
docker pull alekstar79/autocomplete-search
```
and run:
```shell
docker run -d -p 80:80 -e DOCKER_ENV=true --rm --name autocomplete-search alekstar79/autocomplete-search
```

For ease of use, a Makefile has been created with short commands `pull, run, stop`.

![review](review.gif "Autocomplete Search")
