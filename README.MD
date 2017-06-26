#webkit-sass

##usage:
+ import && config frame material:
```sass
//base config:
$base-font-family:'STHeiti', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
$base-font-size-h1-3:14px;
$base-font-size-h4-6:12px;

//grid:
$grid-padding-width:              10px !default;
$grid-responsive-sm-break:        567px !default;  // smaller than landscape phone
$grid-responsive-md-break:        767px !default;  // smaller than portrait tablet
$grid-responsive-lg-break:        1023px !default; // smaller than landscape tablet

//initial your generators:

@import "dist/webkit-sass";
```
+ rem suppprt:
  + https://github.com/afeiship/resolution
  + use `to-rem` sass functions
  ```
  .f20{
    font-size:to-rem(20);
  }
  ```

## architecture:
> webkit-sass = (frame modules + sass ui modules)

### frame modules:
| Module name     | Module description     |
| :------------- | :------------- |
| webkit-sass-functions       | webkit-sass-functions       |
| webkit-sass-mixins       | webkit-sass-mixins       |
| webkit-sass-reset       | webkit-sass-reset       |
| webkit-sass-generators       | webkit-sass-generators       |
| webkit-sass-flex-grid       | webkit-sass-flex-grid       |
| webkit-sassui-short-name       | webkit-sassui-short-name       |


### sass modules:
| Module name     | Module description     |
| :------------- | :------------- |
| webkit-sassui-*       | webkit-sassui-*       |


##build:
+ cd webkit-css
+ npm install
+ gulp
