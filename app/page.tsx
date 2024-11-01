"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// 从 GitHub 获取项目描述的函数
const getGitHubDescription = async (repo: string) => {
  const response = await fetch(`https://api.github.com/repos/syuchua/${repo}`, {
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    }
  });
  const data = await response.json();
  return data.description || "No description available";
}

export default function Component() {
  // const { t } = useTranslation("common")
  const [projectDescriptions, setProjectDescriptions] = useState<{ [key: string]: string }>({})

  const projects = [
    { name: "QFurina", repo: "QFurina", link: "https://github.com/syuchua/QFurina" },
    { name: "chatui", repo: "chatui", link: "https://github.com/syuchua/chatui" },
    { name: "termux-jupyter", repo: "termux-jupyter", link: "https://github.com/syuchua/termux-jupyter" },
  ]

  const blogPosts = [
    { title: "记一次开发过程中的乌龙并借此谈谈python的装饰器机制", date: "June 15, 2024", link: "https://blog.yuchu.me/posts/7f74/" },
    { title: "解决POST请求被Nginx转换成GET的问题", date: "May 22, 2024", link: "https://blog.yuchu.me/posts/1b48/" },
    { title: "termux折腾日记之jupyter、numpy、pandas和matplotlib的安装", date: "April 10, 2023", link: "https://blog.yuchu.me/posts/baa2/" },
  ]

  useEffect(() => {
    const fetchDescriptions = async () => {
      const descriptions: { [key: string]: string } = {}
      for (const project of projects) {
        descriptions[project.repo] = await getGitHubDescription(project.repo)
      }
      setProjectDescriptions(descriptions)
    }
    fetchDescriptions()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">彧初的个人主页</h1>
          <p className="text-xl text-gray-600">description</p>
        </header>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">about</TabsTrigger>
            <TabsTrigger value="projects">projects</TabsTrigger>
            <TabsTrigger value="blog">blog</TabsTrigger>
            <TabsTrigger value="stacks">stacks</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>aboutMe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  你好！我是彧初，目前是一名机器人工程的大四学生。我对机器人技术充满热情，专注于开发和设计智能系统。在我的学习过程中，我参与了多个项目，包括自主导航机器人、机械臂控制系统以及多传感器融合技术的应用。我熟悉多种编程语言和工具，如 Python、C++、ROS，以及常用的开发平台如 Arduino 和 Raspberry Pi。
                </p>
                <p className="text-gray-700">
                  除了学术项目，我还积极参与开源社区，贡献了多个开源项目，并在 GitHub 上分享我的工作。我相信通过开源和协作，我们可以共同推动技术的发展。我也喜欢写博客，记录我的学习和开发经验，希望能帮助更多的人。
                </p>
                <p className="text-gray-700">
                  在未来，我希望能够继续深耕机器人技术领域，探索更多的可能性，并将我的知识和经验应用到实际项目中，解决现实世界中的问题。
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.repo}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{projectDescriptions[project.repo] || "Loading..."}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="blog">
            <ScrollArea className="h-[400px]">
              <div className="grid gap-4">
                {blogPosts.map((post, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link 
                        href={post.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read More
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="stacks">
            <Card>
              <CardHeader>
                <CardTitle>stacks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Websocket</Badge>
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">Golang</Badge>
                  <Badge variant="secondary">ROS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Nginx</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">AutoCAD</Badge>
                  <Badge variant="secondary">SolidWorks</Badge>
                  <Badge variant="secondary">MATLAB</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}