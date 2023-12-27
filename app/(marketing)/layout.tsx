const MarketingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-ful bg-slate-100">
            {/* Navbar */}
            <main>
                {children}
            </main>
        
        </div>
    )
}