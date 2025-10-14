function FindProxyForURL(url, host) {
    // Normalize the host to lowercase for consistent matching
    var normalizedHost = host.toLowerCase();
    
    // Check if the host is instagram.com or any of its subdomains
    if (dnsDomainIs(normalizedHost, "instagram.com") || 
        dnsDomainIs(normalizedHost, "x.com") || 
        dnsDomainIs(normalizedHost, "twitter.com") || 

        dnsDomainIs(normalizedHost, ".instagram.com") || 
        dnsDomainIs(normalizedHost, ".x.com") || 
        dnsDomainIs(normalizedHost, ".twitter.com") 
        ) {
        // Return a non-existent proxy to block access
        return "PROXY 0.0.0.0:0";
    }
    return "DIRECT";
}
