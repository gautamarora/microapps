## Blog

This blog application is a mega-app that is built using a micro-app architecture. Each page (post, photo, profile) is a micro-app that uses expressjs, browserify, handlebars & sass. These micro-apps share other micro-apps like header. Each micro-app is published as a npm module at [npmjs.com](https://www.npmjs.com/~gautamarora) from where it is installed into the mega app.

The modular architecture is inspired from  [See-Eat-Sleep](https://github.com/thlorenz/see-eat-sleep)/[AppUp](https://github.com/thlorenz/appup) and [Condé Nast Traveler](http://www.cntraveler.com).

### Micro Apps used:
1. [core](https://github.com/gautamarora/core)
1. [header](https://github.com/gautamarora/header)
1. [homepage](https://github.com/gautamarora/homepage)
1. [post](https://github.com/gautamarora/post)
1. [photo](https://github.com/gautamarora/photo)
1. [profile](https://github.com/gautamarora/profile)

## How to run

1. Clone the blog repo:

        git clone git@github.com:gautamarora/blog.git

1. Install dependencies:

        cd blog
        npm install

1. Run the app:

        npm start

  Now go to [localhost:3000](http://localhost:3000) to see the sample blog app

## How to dev

For development, its easiest to softlink all the dependencies to local folders for the microapp dependencies, here is how:

1. Clone all the microapp dependency repos:

        git clone git@github.com:gautamarora/core.git
        git clone git@github.com:gautamarora/header.git
        git clone git@github.com:gautamarora/homepage.git
        git clone git@github.com:gautamarora/post.git
        git clone git@github.com:gautamarora/photo.git
        git clone git@github.com:gautamarora/profile.git
        
1. Install dependencies for all the above repos by running this command in each of them:

        npm install
        
1. Create softlinks for all the dependencies by running this command in each of them:

        npm link
        
1. Now go back to the blog repo and softlink it to the locally cloned repos:

        npm link core
        npm link header
        npm link homepage
        npm link post
        npm link photo
        npm link profile
      
1. Now you can make edits to any microapp locally, and the changes will be reflected when you run the blog app:

        npm start

## Live Examples
[www.gautamarora.com](http://www.gautamarora.com)
