# Learnings

* Create a folder called views to store your html views
* Express router requires absolute paths
* Node.js includes a core module called path.  Path can be used to generate absolute paths, so that html files can be located and served to the client
* Node.js also includes a global variable __dirname, which stores the absolute path for the root directory of your prodject
* Path concatenates __dirname and any subsequent segements"

``` path.join(__dirname, 'views', 'shop.html') ```

* Using path ensures your absolute paths run on both windows and linux machines (absolute paths differ between these machines)
* Paths can then be sent in your router via the sendFile method available on responses:

```
	router.get('/', (req, res, next) => {
		res.sendFile(path.join(__dirname, '../', 'views', 'index.html))
	})
```

* Node applications include a global variable called process. The filename of your mainModule (i.e. the module that started your application) is available via process and get be passed to the core module "path" to export it via  module.

The main directory of your application can be exported via  module:

```
const path = require('path')

module.exports = path.dirname(process.mainModule.filename)
```

You can then define your rootDir in your routes files and replace __dirname with it:

```
const rootDir = require('../util/path')
router.get('/add-product', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'view', 'add-product.html'))
})
```

* Nodejs, by design, prevents users from accessing the filesystem (for example, surfing to localhost:3000/app does not provide access to the app.js file). This is good except when it comes to styling. Style folders need to be made public.

* Express.js provides a feature to serve files "statically" -- this means files are not handled by middleware such as the router but are forwarded directly to the file system. To use this feature, regist the following in app.js:

```
	app.use(express.static(__dirname, 'public'))
```

NOTE: the path you provide grants the application read access to the folder.

* Styles can be linkedin associated html files:

```
	<link rel="stylesheet" href="/css/main.css">
```