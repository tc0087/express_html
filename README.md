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
		res.sendFile(path.join(__dirname, 'views', 'index.html))
	})
```