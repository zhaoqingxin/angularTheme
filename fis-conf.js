fis.set('project.files', ['css/**','js/**','tpl/**','views/**','index.html']);



fis.match('*.{css,js,png,jpg}', {
    useHash: true,
    release:'/static/$0'
})
.match('*.js', {
    // 指定压缩插件 fis-optimizer-uglify-js
    optimizer: fis.plugin('uglify-js', {
        // option of uglify-js
    }),
    release:'/static/js/$0'
})
.match('*.css', {
    // compress css invoke fis-optimizer-clean-css
    optimizer: fis.plugin('clean-css', {
        // option of clean-css
    }),
    release:'/static/css/$0'
})

.match('*.html', {
    //invoke fis-optimizer-html-minifier
    optimizer: fis.plugin('html-minifier'),
    useMap:true
});


fis.match('{css/font,lib/font-awesome/css/font-awesome,lib/simple-line-icons/simple-line-icons,lib/bootstrap/css/bootstrap.min}.css',{
    packTo:'common_all.css'
});
fis.match('{css/components,css/plugins,css/layout,css/darkblue}.css',{
    packTo:'layout_all.css'
});
//打包后处理插件
fis.match('::package', {
    postpackager : fis.plugin('loader')
});
//合并css
/*css/font.css
lib/font-awesome/css/font-awesome.css
lib/simple-line-icons/simple-line-icons.min.css
lib/bootstrap/css/bootstrap.min.css
css/components.min.css
css/plugins.min.css
css/layout.min.css
css/darkblue.min.css*/



/*
<link href="/static_css/common_all.css" rel="stylesheet" type="text/css" />
    <!-- BEGIN DYMANICLY LOADED CSS FILES(all plugin and page related styles must be loaded between GLOBAL and THEME css files ) -->
<link id="ng_load_plugins_before" />
    <!-- END DYMANICLY LOADED CSS FILES -->
<link href="/static_css/layout_all.css" rel="stylesheet" type="text/css" />*/

/*fis.set('statics','/statics');//static目录
 fis.match("**!/!*",{
 release: '${statics}/$&'
 });*/

/*fis.media('prod').match('', {

});*/


