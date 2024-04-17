import {
  File,
  Layout,
  LogOut,
  Package,
  PenTool,
  Settings,
  Tag,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { ThemeProvider } from "./providers/theme-provider";

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <aside
          className={cn("w-72 md:flex hidden border-r flex-col transition-all")}
        >
          <div className="min-h-16 h-16 flex justify-center items-center">
            <p className="text-3xl font-semibold">MicroTech</p>
          </div>
          <div className="py-2 flex justify-center items-start">
            <ul className="w-full px-4 space-y-3">
              <li>
                <Button
                  size="sm"
                  variant="default"
                  asChild
                  className="w-full flex justify-start"
                >
                  <a href="/">
                    <Layout className="h-4 w-4 mr-2" />
                    Layout
                  </a>
                </Button>
              </li>
              <li>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="w-full flex justify-start"
                >
                  <a href="/">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </a>
                </Button>
              </li>
              <li>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="w-full flex justify-start"
                >
                  <a href="/">
                    <Tag className="h-4 w-4 mr-2" />
                    Tag
                  </a>
                </Button>
              </li>
              <li>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="w-full flex justify-start"
                >
                  <a href="/">
                    <File className="h-4 w-4 mr-2" />
                    File
                  </a>
                </Button>
              </li>
              <li>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="w-full flex justify-start"
                >
                  <a href="/">
                    <Package className="h-4 w-4 mr-2" />
                    Package
                  </a>
                </Button>
              </li>
              <li>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="w-full flex justify-start"
                >
                  <a href="/">
                    <PenTool className="h-4 w-4 mr-2" />
                    PenTool
                  </a>
                </Button>
              </li>
            </ul>
          </div>
          <div className="min-h-16 h-16 flex justify-center items-center mt-auto px-4">
            <ul className="w-full px-4 space-y-1">
              <li>
                <Button variant="destructive" size="icon" className="w-full">
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </Button>
              </li>
            </ul>
          </div>
        </aside>
        <aside
          className={cn("w-16 md:hidden flex border-r flex-col transition-all")}
        >
          <div className="min-h-16 h-16 flex justify-center items-center">
            <p className="text-3xl font-semibold">M</p>
          </div>
          <div className="py-2 flex justify-center items-start">
            <ul className="space-y-2">
              <li>
                <Button size="icon" variant="ghost" asChild>
                  <a href="/">
                    <Layout className="h-4 w-4" />
                  </a>
                </Button>
              </li>
              <li>
                <Button size="icon" variant="ghost" asChild>
                  <a href="/">
                    <Settings className="h-4 w-4" />
                  </a>
                </Button>
              </li>
              <li>
                <Button size="icon" variant="default" asChild>
                  <a href="/">
                    <Tag className="h-4 w-4" />
                  </a>
                </Button>
              </li>
              <li>
                <Button size="icon" variant="ghost" asChild>
                  <a href="/">
                    <File className="h-4 w-4" />
                  </a>
                </Button>
              </li>
              <li>
                <Button size="icon" variant="ghost" asChild>
                  <a href="/">
                    <Package className="h-4 w-4" />
                  </a>
                </Button>
              </li>
              <li>
                <Button size="icon" variant="ghost" asChild>
                  <a href="/">
                    <PenTool className="h-4 w-4" />
                  </a>
                </Button>
              </li>
            </ul>
          </div>
          <div className="min-h-16 h-16 flex justify-center items-center mt-auto">
            <Button variant="destructive" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </aside>
        <div className="grow flex-1 flex flex-col transition-all">
          <nav className="min-h-16 h-16 px-4 transition-all border-b flex justify-between items-center">
            Navbar
          </nav>
          <main className="flex flex-1 transition-all h-[calc(100vh-64px)]">
            <div className="overflow-auto px-4 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus nostrum in assumenda repellendus reprehenderit
              aliquid nemo possimus laudantium, quae dolores quo, ipsum
              recusandae nisi consequatur debitis quasi veritatis eaque
              repudiandae?
            </div>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
