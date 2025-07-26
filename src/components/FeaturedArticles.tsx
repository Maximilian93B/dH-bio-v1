'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Article {
  title: string
  publication: string
  date: string
  url: string
  description: string
}

const articles: Article[] = [

  {
    title: "UN Women Entrepreneurship EXPO Speaker Profile",
    publication: "UN Women",
    date: "2024",
    url: "https://www.unwomenexpo.org/speaker/david-hanegraaf",
    description: "Featured speaker profile highlighting David's role in sustainable technology and collaboration with United Nations agencies."
  },
  {
    title: "David E. Hanegraaf Inducted into Marquis Who's Who",
    publication: "Marquis Who's Who",
    date: "2022",
    url: "https://www.24-7pressrelease.com/press-release/495757/david-e-hanegraaf-mba-has-been-inducted-into-the-prestigious-marquis-whos-who-biographical-registry",
    description: "Recognition of over 20 years of excellence in finance, venture capital, and sustainable technology development."
  },  
  {
    title: "The 10 Most Influential Tech Leaders of 2021",
    publication: "Analytics Insight Magazine",
    date: "2021",
    url: "#",
    description: "David Hanegraaf recognized for his leadership in technology and finance sectors, particularly his work with TheXchange and digital securities innovation."
  },
  {
    title: "David Hanegraaf Featured in Top 100 People in Finance",
    publication: "Top 100 Magazine",
    date: "2021",
    url: "https://www.thetop100magazine.com/david-hanegraaf",
    description: "Profile featuring David's work in sustainable investments, digital securities, and his leadership roles across global markets including TheXchange and Global Sustainability Fund."
  },
  {
    title: "Guest Speaker and Technology adjudicator at UNOPS Dadlihack 3.0",
    publication: "UNOPS Dadlihack 3.0",
    date: "2020",
    url: "https://www.thetop100magazine.com/david-hanegraaf",
    description: "David was a guest speaker and judge at UNOPS Dadlihack 3.0 along side UN, Sony and MIT representatives during the competition in Antigua and Barbuda."
  },
]
const FeaturedArticles: React.FC<{ isInView?: boolean }> = ({ isInView }) => {
  return (
    <section className="py-20 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header with transparent background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Featured Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full" />
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full"
            >
              <div className="glass rounded-xl p-8 h-full flex flex-col hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex-1">
                  <p className="text-sm text-neutral-500 mb-3 font-medium uppercase tracking-wider">
                    {article.publication} • {article.date}
                  </p>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    {article.description}
                  </p>
                </div>
                
                <motion.a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-300 mt-6"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  Read Article
                  <ExternalLink className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles 