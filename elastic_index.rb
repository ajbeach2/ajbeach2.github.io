client.indices.create index: 'ajbeach-githubio',
                      body: {
                        settings: {
                          index: {
                            number_of_shards: 10,
                            number_of_replicas: 0
                          }
                        },
                        mappings: {
                          post: {
                            properties: {
                              title:    { type: 'string'},
                              content:  { type: 'string'},
                              url: {type: 'string'},
                              categories:  { type: 'string' },
                              date: {type: 'date'}
                            }
                          }
                        }
                      }