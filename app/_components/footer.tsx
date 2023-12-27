import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

const Footer = () => {
    return (
        <div className="fixed w-full h-14 py-4 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-2xl my-10 mx-auto flex items-center w-full justify-between">  
                
                <Button  size="sm">
                   Privacy Policies
                </Button>

                <Button size="sm" variant="secondary">
                    Security
                </Button>
                
            </div>
            
        </div>
    )
}

export default Footer