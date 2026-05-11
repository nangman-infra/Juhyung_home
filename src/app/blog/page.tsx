"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchLatestPosts, TistoryPost } from "../../lib/tistory";

export default function BlogPage() {
    const [posts, setPosts] = useState<TistoryPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 데이터를 가져와서 상태에 저장
        fetchLatestPosts().then((data) => {
            setPosts(data);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className="container mx-auto px-4 py-32 flex flex-col items-center min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 w-full"
            >
                <h1 className="text-4xl font-bold mb-6">Blog</h1>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    보안 꿈나무 김주형의 기술 블로그입니다. <br />
                    보안 일대기와 취약점 분석 및 모의 해킹 시연 등 <br />
                    공부한 내용을 바탕으로 작성하고 있습니다.
                </p>

                <a
                    href="https://artist0904.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg mb-20"
                >
                    블로그 방문하기 →
                </a>

                <div className="w-full max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-left border-b pb-2">최근 게시글</h2>

                    {loading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    ) : posts.length > 0 ? (
                        <div className="space-y-4">
                            {posts.map((post, index) => (
                                <motion.a
                                    key={index}
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors text-left group"
                                >
                                    <span className="text-lg font-medium group-hover:text-primary transition-colors line-clamp-1">
                                        {post.title}
                                    </span>
                                    <span className="text-sm text-muted-foreground whitespace-nowrap mt-2 md:mt-0">
                                        {post.pubDate}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted-foreground py-10">게시글을 불러올 수 없거나 아직 게시글이 없습니다.</p>
                    )}
                </div>
            </motion.div>
        </div>
    );
}