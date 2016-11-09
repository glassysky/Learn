#!/usr/bin/env python
# coding=utf-8

import scrapy

class AccountsSpider(scrapy.Spider):
    name = "accounts"

    def start_requests(self):
        urls = [
            'http://202.119.228.6:8080/reader/hwthau2.php?id=101002014009800',
            'http://202.119.228.6:8080/reader/hwthau2.php?id=101002014009900',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = 'quotes-%s.txt' % page
        with open(filename, 'wb') as f:
            f.write(response.headers)
        self.log('Saved file %s' % filename)
