(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{426:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux下安装glibc-2-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux下安装glibc-2-15","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux下安装GLIBC_2-15")]),s._v(" "),t("h3",{attrs:{id:"_1、查看系统glibc支持的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看系统glibc支持的版本","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、查看系统glibc支持的版本")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# strings /lib64/libc.so.6 |grep GLIBC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa | grep glibc")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2、升级glibc支持的版本到glibc-2-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、升级glibc支持的版本到glibc-2-15","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、升级glibc支持的版本到GLIBC_2.15")]),s._v(" "),t("blockquote",[t("p",[s._v("官网地址 ➡️ "),t("a",{attrs:{href:"http://www.gnu.org/software/libc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.gnu.org/software/libc/"),t("OutboundLink")],1)])]),s._v(" "),t("blockquote",[t("p",[s._v("官网所有安装包 ➡️ "),t("a",{attrs:{href:"http://ftp.gnu.org/gnu/glibc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://ftp.gnu.org/gnu/glibc/"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/local")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget http://ftp.gnu.org/gnu/libc/glibc-2.15.tar.xz")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -xvf glibc-2.15.tar.xz")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /var/VMdisks")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv glibc-2.15 /var/VMdisks/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /var/VMdisks/glibc-2.15/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir build && cd build/")]),s._v("\n--- 不要将 glibc 安装到默认的目录【/usr/local】或者 【任何自定义的目录】，请务必安装到【/usr】目录\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make -j4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make install")]),s._v("\n--- 解决中文乱码问题\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make localedata/install-locales")]),s._v("\n")])])]),t("h6",{attrs:{id:"检查验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查验证","aria-hidden":"true"}},[s._v("#")]),s._v(" 检查验证")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll /lib64/libc*")]),s._v("\n--- 查看系统glibc支持的版本\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# strings /lib64/libc.so.6 |grep GLIBC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /lib64/libc.so.6")]),s._v("\n")])])]),t("h3",{attrs:{id:"_3、升级glibc挂了后可以救命的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、升级glibc挂了后可以救命的命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、升级glibc挂了后可以救命的命令")]),s._v(" "),t("p",[t("strong",[s._v("如果实在不幸，在升级glibc时挂掉了，执行各种命令都提示错误，比如：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Segmentation fault")])]),s._v(" "),t("li",[t("code",[s._v("error while loading shared libraries: libc.so.6: cannot open shared object file: No such file or directory")])])]),s._v(" "),t("p",[t("strong",[s._v("这类错误出现千万不要着急退出SSH，执行下面的命令是可以挽救的：")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /lib64")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LD_PRELOAD=/lib64/libc-2.12.so ln -sf /lib64/libc-2.12.so libc.so.6")]),s._v("\n")])])]),t("h6",{attrs:{id:"tips：libc-2-12-so这个文件名根据你系统中的文件而定，如果有多个版本so文件可以逐个尝试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tips：libc-2-12-so这个文件名根据你系统中的文件而定，如果有多个版本so文件可以逐个尝试","aria-hidden":"true"}},[s._v("#")]),s._v(" Tips："),t("code",[s._v("libc-2.12.so")]),s._v("这个文件名根据你系统中的文件而定，如果有多个版本so文件可以逐个尝试")])])}),[],!1,null,null,null);a.default=r.exports}}]);