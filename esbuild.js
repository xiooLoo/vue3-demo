const esbuild = require('esbuild');

const MyPlugin = {
    name: 'http-url',
    setup(build) {
        // onResolve
        // onLoad
        build.onResolve({ filter: /^https?:\/\// }, (args) => {
            console.log('args:', args)
            return {
                path: args.path,
                namespace: 'http-url'
            }
        });
        build.onLoad({ filter: /.*/, namespace: "http-url"}, args => {
            console.log('onLoadBuild:', args)
            return {
                namespace: 'http-url',
                // path: ''
            }
        })
    }
}

esbuild.build({
    entryPoints: ['src/main.mjs'],
    bundle: true,
    outfile: 'out.js',
    plugins: [ MyPlugin ]
})