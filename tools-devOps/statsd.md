> `Nodejs`
> `node-statsd`
> `statsd`
> `aws-cloudwatch-statsd-backend`


# `statsd`

`StatsD` is originally a simple nodejs based daemon to aggregate and summarize application metrics.
It's a UPD based utility listening to a port.

A client app throws stats(in desired format) to this port and is being captured by this deamon


Further statsd pass 'em on to defined backend(s) like Graphite(Most popular) and AWS cloudwatch(In my case)


## Installation 
Very Simple. If you have a node app just npm install the package and you are done.

```
npm install statsd
```

The deamon utility is in `./node_modules/statsd/bin/statsd` directory. So either export this bin to your `$PATH`
or export `$statsdpath` may be and use that. Or you can directly run this from here.

```
node ./node_modules/statsd/bin/statsd /path/to/config
```

Sample Config:
```
{
  graphitePort: 2003
, graphiteHost: "localhost"
, port: 8125,
//debug: true, // For debug mode
  backends: [
     //"./backends/console", // For printing everything to console
      "./backends/graphite" , // For pushing it to graphite
     //"aws-cloudwatch-statsd-backend" // "aws-cloudwatch-statsd-backend" is another utility I installed for pushing stats to aws cloudwatch
  ],

/*
// ** --- aws-cloudwatch-statsd-backend config--- 
cloudwatch:
    {
        accessKeyId: 'YOUR_ACCESS_KEY_ID',
        secretAccessKey:'YOUR_SECRET_ACCESS_KEY',
        region:"YOUR_REGION"
    }
 */
 
}

```

More info here https://github.com/etsy/statsd/blob/master/exampleConfig.js



Ref: https://github.com/etsy/statsd
