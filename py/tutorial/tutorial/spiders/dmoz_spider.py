#!/usr/bin/env python
# -*- coding: utf-8 -*-


import scrapy

from tutorial.items import DmozItem

class DmozSpider(scrapy.Spider):
    name = "douyu"
    allowed_domains = ["douyu.com"]
    start_urls = [
        "http://www.douyu.com/directory/all",
    ]

    # def parse(self, response):
    #     for href in response.css("ul.directory.dir-col > li > a::attr('href')"):
    #         url = response.urljoin(href.extract())
    #         yield scrapy.Request(url, callback=self.parse_dir_contents)
    #
    # def parse_dir_contents(self, response):
    #     for sel in response.xpath('//ul/li'):
    #         item = DmozItem()
    #         item['title'] = sel.xpath('a/text()').extract()
    #         item['link'] = sel.xpath('a/@href').extract()
    #         item['desc'] = sel.xpath('text()').extract()
    #         yield item

    def parse(self, response):
        for sel in response.xpath('//ul/li'):
            a = sel.xpath('a/text()').extract()
            item = DmozItem()
            if(len(sel.xpath('a/text()').extract()) > 0):
                item['title'] = sel.xpath('a/text()').extract()[0].encode('utf-8')
            else:
                item['title'] = ''
            # item['title'] = 1
            item['link'] = sel.xpath('a/@href').extract()
            item['desc'] = sel.xpath('text()').extract()
            yield item
