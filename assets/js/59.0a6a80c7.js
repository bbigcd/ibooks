(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{380:function(t,e,n){"use strict";n.r(e);var r=n(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"springboot集成druid不支持多条sql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot集成druid不支持多条sql","aria-hidden":"true"}},[t._v("#")]),t._v(" SpringBoot集成Druid不支持多条SQL")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("DataSource")]),t._v("初始化Bean 添加")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("List<Filter> proxyFilters = new ArrayList<Filter>();\nWallFilter statFilter = new WallFilter();\nWallConfig config = new WallConfig();\nconfig.setMultiStatementAllow(true); // 批量操作\nstatFilter.setConfig(config);\nproxyFilters.add(statFilter);\ndruidDataSource.setProxyFilters(proxyFilters);\n")])])]),n("p",[t._v("贴上自己的"),n("code",[t._v("Config")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package com.wstro.config;\n\nimport java.sql.SQLException;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nimport javax.sql.DataSource;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.web.servlet.FilterRegistrationBean;\nimport org.springframework.boot.web.servlet.ServletRegistrationBean;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\nimport org.springframework.transaction.annotation.EnableTransactionManagement;\n\nimport com.alibaba.druid.filter.Filter;\nimport com.alibaba.druid.pool.DruidDataSource;\nimport com.alibaba.druid.support.http.StatViewServlet;\nimport com.alibaba.druid.support.http.WebStatFilter;\nimport com.alibaba.druid.wall.WallConfig;\nimport com.alibaba.druid.wall.WallFilter;\n\n/**\n * Druid数据源配置\n * \n * @author Joey\n * @Email 2434387555@qq.com\n *\n */\n@Configuration\n@EnableTransactionManagement // 启注解事务管理\npublic class DataSourceConfig {\n\tprivate Logger logger = LoggerFactory.getLogger(DataSourceConfig.class);\n\n\t@Value("${spring.datasource.url}")\n\tprivate String dbUrl;\n\n\t@Value("${spring.datasource.username}")\n\tprivate String username;\n\n\t@Value("${spring.datasource.password}")\n\tprivate String password;\n\n\t@Value("${spring.datasource.driverClassName}")\n\tprivate String driverClassName;\n\n\t@Value("${spring.datasource.initialSize}")\n\tprivate int initialSize;\n\n\t@Value("${spring.datasource.minIdle}")\n\tprivate int minIdle;\n\n\t@Value("${spring.datasource.maxActive}")\n\tprivate int maxActive;\n\n\t@Value("${spring.datasource.maxWait}")\n\tprivate int maxWait;\n\n\t@Value("${spring.datasource.timeBetweenEvictionRunsMillis}")\n\tprivate int timeBetweenEvictionRunsMillis;\n\n\t@Value("${spring.datasource.minEvictableIdleTimeMillis}")\n\tprivate int minEvictableIdleTimeMillis;\n\n\t@Value("${spring.datasource.validationQuery}")\n\tprivate String validationQuery;\n\n\t@Value("${spring.datasource.testWhileIdle}")\n\tprivate boolean testWhileIdle;\n\n\t@Value("${spring.datasource.testOnBorrow}")\n\tprivate boolean testOnBorrow;\n\n\t@Value("${spring.datasource.testOnReturn}")\n\tprivate boolean testOnReturn;\n\n\t@Value("${spring.datasource.poolPreparedStatements}")\n\tprivate boolean poolPreparedStatements;\n\n\t@Value("${spring.datasource.maxPoolPreparedStatementPerConnectionSize}")\n\tprivate int maxPoolPreparedStatementPerConnectionSize;\n\n\t@Value("${spring.datasource.filters}")\n\tprivate String filters;\n\n\t@Value("${spring.datasource.connectionProperties}")\n\tprivate String connectionProperties;\n\n\t/**\n\t * 注册DruidServlet\n\t * \n\t * @return ServletRegistrationBean\n\t */\n\t@Bean\n\tpublic ServletRegistrationBean druidServletRegistrationBean() {\n\t\tServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean();\n\t\tservletRegistrationBean.setServlet(new StatViewServlet());\n\t\tservletRegistrationBean.addUrlMappings("/druid/*");\n\t\t// 白名单：\n\t\tservletRegistrationBean.addInitParameter("allow", "127.0.0.1");\n\t\t// IP黑名单 (存在共同时，deny优先于allow) : 如果满足deny的话提示:Sorry, you are not\n\t\t// permitted to view this page.\n\t\t// 登录查看信息的账号密码.\n\t\tservletRegistrationBean.addInitParameter("loginUsername", "joey");\n\t\tservletRegistrationBean.addInitParameter("loginPassword", "jay");\n\t\t// 是否能够重置数据.\n\t\tservletRegistrationBean.addInitParameter("resetEnable", "false");\n\t\treturn servletRegistrationBean;\n\t}\n\n\t/**\n\t * 注册DruidFilter拦截\n\t * \n\t * @return FilterRegistrationBean\n\t */\n\t@Bean\n\tpublic FilterRegistrationBean druidFilterRegistrationBean() {\n\t\tFilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();\n\t\tfilterRegistrationBean.setFilter(new WebStatFilter());\n\t\tMap<String, String> initParams = new HashMap<String, String>();\n\t\t// 设置忽略请求\n\t\tinitParams.put("exclusions", "*.js,*.gif,*.jpg,*.bmp,*.png,*.css,*.ico,/druid/*");\n\t\tfilterRegistrationBean.setInitParameters(initParams);\n\t\tfilterRegistrationBean.addUrlPatterns("/*");\n\t\treturn filterRegistrationBean;\n\t}\n\n\t/**\n\t * 配置DataSource\n\t * \n\t * @return DataSource\n\t * @throws SQLException\n\t */\n\t@Bean(initMethod = "init", destroyMethod = "close")\n\t@Primary\n\tpublic DataSource dataSource() throws SQLException {\n\t\tDruidDataSource druidDataSource = new DruidDataSource();\n\t\tdruidDataSource.setUrl(dbUrl);\n\t\tdruidDataSource.setUsername(username);\n\t\tdruidDataSource.setPassword(password);\n\t\tdruidDataSource.setDriverClassName(driverClassName);\n\t\t// configuration\n\t\tdruidDataSource.setInitialSize(initialSize);\n\t\tdruidDataSource.setMinIdle(minIdle);\n\t\tdruidDataSource.setMaxActive(maxActive);\n\t\tdruidDataSource.setMaxWait(maxWait);\n\t\tdruidDataSource.setTimeBetweenEvictionRunsMillis(timeBetweenEvictionRunsMillis);\n\t\tdruidDataSource.setMinEvictableIdleTimeMillis(minEvictableIdleTimeMillis);\n\t\tdruidDataSource.setValidationQuery(validationQuery);\n\t\tdruidDataSource.setTestWhileIdle(testWhileIdle);\n\t\tdruidDataSource.setTestOnBorrow(testOnBorrow);\n\t\tdruidDataSource.setTestOnReturn(testOnReturn);\n\t\tdruidDataSource.setPoolPreparedStatements(poolPreparedStatements);\n\t\tdruidDataSource.setMaxPoolPreparedStatementPerConnectionSize(maxPoolPreparedStatementPerConnectionSize);\n\t\ttry {\n\t\t\tList<Filter> proxyFilters = new ArrayList<Filter>();\n\t\t\tWallFilter statFilter = new WallFilter();\n\t\t\tWallConfig config = new WallConfig();\n\t\t\tconfig.setMultiStatementAllow(true); // 批量操作\n\t\t\tstatFilter.setConfig(config);\n\t\t\tproxyFilters.add(statFilter);\n\t\t\tdruidDataSource.setProxyFilters(proxyFilters);\n\t\t\tdruidDataSource.setFilters(filters);\n\t\t} catch (SQLException e) {\n\t\t\tlogger.error("druid configuration initialization filter", e);\n\t\t}\n\t\tdruidDataSource.setConnectionProperties(connectionProperties);\n\t\treturn druidDataSource;\n\t}\n}\n')])])]),n("h5",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("code",[t._v("properties")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("#JDBC\n# \\u6570\\u636E\\u5E93\\u8BBF\\u95EE\\u914D\\u7F6E\n# \\u4E3B\\u6570\\u636E\\u6E90\\uFF0C\\u9ED8\\u8BA4\\u7684\nspring.datasource.type=com.alibaba.druid.pool.DruidDataSource\nspring.datasource.driverClassName=com.mysql.jdbc.Driver\nspring.datasource.url=jdbc:mysql://192.168.1.88:3306/wstro?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8\nspring.datasource.username=root\nspring.datasource.password=root\n\n# \\u4E0B\\u9762\\u4E3A\\u8FDE\\u63A5\\u6C60\\u7684\\u8865\\u5145\\u8BBE\\u7F6E\\uFF0C\\u5E94\\u7528\\u5230\\u4E0A\\u9762\\u6240\\u6709\\u6570\\u636E\\u6E90\\u4E2D\n# \\u521D\\u59CB\\u5316\\u5927\\u5C0F\\uFF0C\\u6700\\u5C0F\\uFF0C\\u6700\\u5927\nspring.datasource.initialSize=5\nspring.datasource.minIdle=5\nspring.datasource.maxActive=20\n\n# \\u914D\\u7F6E\\u83B7\\u53D6\\u8FDE\\u63A5\\u7B49\\u5F85\\u8D85\\u65F6\\u7684\\u65F6\\u95F4\nspring.datasource.maxWait=60000\n\n# \\u914D\\u7F6E\\u95F4\\u9694\\u591A\\u4E45\\u624D\\u8FDB\\u884C\\u4E00\\u6B21\\u68C0\\u6D4B\\uFF0C\\u68C0\\u6D4B\\u9700\\u8981\\u5173\\u95ED\\u7684\\u7A7A\\u95F2\\u8FDE\\u63A5\\uFF0C\\u5355\\u4F4D\\u662F\\u6BEB\\u79D2\nspring.datasource.timeBetweenEvictionRunsMillis=60000\n\n# \\u914D\\u7F6E\\u4E00\\u4E2A\\u8FDE\\u63A5\\u5728\\u6C60\\u4E2D\\u6700\\u5C0F\\u751F\\u5B58\\u7684\\u65F6\\u95F4\\uFF0C\\u5355\\u4F4D\\u662F\\u6BEB\\u79D2\nspring.datasource.minEvictableIdleTimeMillis=300000\nspring.datasource.validationQuery=SELECT 1 FROM DUAL\nspring.datasource.testWhileIdle=true\nspring.datasource.testOnBorrow=false\nspring.datasource.testOnReturn=false\n\n# \\u6253\\u5F00PSCache\\uFF0C\\u5E76\\u4E14\\u6307\\u5B9A\\u6BCF\\u4E2A\\u8FDE\\u63A5\\u4E0APSCache\\u7684\\u5927\\u5C0F\nspring.datasource.poolPreparedStatements=true\nspring.datasource.maxPoolPreparedStatementPerConnectionSize=20\n\n# \\u914D\\u7F6E\\u76D1\\u63A7\\u7EDF\\u8BA1\\u62E6\\u622A\\u7684filters\\uFF0C\\u53BB\\u6389\\u540E\\u76D1\\u63A7\\u754C\\u9762sql\\u65E0\\u6CD5\\u7EDF\\u8BA1\\uFF0C'wall'\\u7528\\u4E8E\\u9632\\u706B\\u5899\nspring.datasource.filters=stat,wall,log4j\n\n# \\u901A\\u8FC7connectProperties\\u5C5E\\u6027\\u6765\\u6253\\u5F00mergeSql\\u529F\\u80FD\\uFF1B\\u6162SQL\\u8BB0\\u5F55\nspring.datasource.connectionProperties=druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000;druid.stat.logSlowSql=true;\n\n# \\u5408\\u5E76\\u591A\\u4E2ADruidDataSource\\u7684\\u76D1\\u63A7\\u6570\\u636E\n#spring.datasource.useGlobalDataSourceStat=true\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);