## Blog

This blog application is a megaapp that is built using a microapp architecture. Each page (post, photo, profile) is a microapp that uses expressjs, browserify, handlebars & sass. These microapps share other microapps like header. Each microapp is published as a npm module at [npmjs.com](https://www.npmjs.com/~gautamarora) from where it is installed into the mega app.

The architecture is inspired from  [See-Eat-Sleep](https://github.com/thlorenz/see-eat-sleep) and [Condé Nast Traveler](http://www.cntraveler.com).

### Micro Apps used:
1. [core](https://github.com/gautamarora/core)
1. [header](https://github.com/gautamarora/header)
1. [homepage](https://github.com/gautamarora/homepage)
1. [post](https://github.com/gautamarora/post)
1. [photo](https://github.com/gautamarora/photo)
1. [profile](https://github.com/gautamarora/profile)

## How to run:

1. Clone this repo

        git clone git@github.com:gautamarora/blog.git

1. Install dependencies

        cd blog
        npm install

1. Run the app

        npm start

  Now go to [localhost:3000](http://localhost:3000) to see the sample blog app

## Live Examples
[www.gautamarora.com](http://www.gautamarora.com)