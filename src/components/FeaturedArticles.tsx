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
  }
]

const FeaturedArticles: React.FC<{ isInView?: boolean }> = ({ isInView }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Content container with increased relative z-index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with transparent background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Featured Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto" />
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative backdrop-blur-sm bg-white/80 p-6 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all duration-300"
            >
              <div className="mb-4">
                <p className="text-sm text-neutral-500 mb-2">
                  {article.publication} • {article.date}
                </p>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-neutral-600">
                  {article.description}
                </p>
              </div>
              
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
              >
                Read Article
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles 