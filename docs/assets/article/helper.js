var fs = require('fs');
var path = require('path');

//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.resolve('./');

//调用文件遍历方法

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath, times){
    let ans = []
    if(times===1){
        ans = {}
    }
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                let filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        let isFile = stats.isFile();//是文件
                        let isDir = stats.isDirectory();//是文件夹
                        if(isFile){ 

                            if(times===2) ans.push(filename)
                        }
                        if(isDir){
                            //fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                            if(times===1){
                                ans[filename]=fileDisplay(filedir,2)
                            }
                        }
                    }
                })
            });
        }
    });
    return ans;
}


ans = fileDisplay(filePath, 1);
setTimeout(()=>{
    ans= JSON.stringify(ans);
    console.log(ans)
    fs.writeFile("data.json",ans,function(err){
        if(err){
            console.warn(err);
        }
    })
},1000)
