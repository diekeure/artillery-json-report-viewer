const getHealthyStatusRating = (
        successRate: number,
        networkIssueCount: number
    ): number => {
    const baseRating = 1000;
    const networkErrorCost = 20;
    const successRatingCost = 120;
    const successRateDetractionRating = Math.floor((100 - Math.floor(successRate)) / 10) * successRatingCost;
    const errorDetractionRating = networkIssueCount * networkErrorCost;
    return baseRating - successRateDetractionRating - errorDetractionRating;

    // Determine the cost based on the total requests ... 
};

const getHealthyStatusText = (healthyRating: number): string => {
    if (healthyRating > 900) { return "Healthy"; }
    if (healthyRating > 700) { return "Moderate"; }
    if (healthyRating > 500) { return "Somewhat Healthy"; }
    if (healthyRating < 0) { return "Unstable"; }
    return "Unhealthy";
}

const getHealthyStatusStars = (healthyRating: number): {filled: number, empty: number} => {
    if(healthyRating > 900) { return {filled: 5, empty: 0}; }
    if(healthyRating > 700) { return {filled: 4, empty: 1}; }
    if(healthyRating > 500) { return {filled: 3, empty: 2}; }
    if(healthyRating > 300) { return {filled: 2, empty: 3}; }
    if(healthyRating > 100) { return {filled: 1, empty: 4}; }

    return {filled: 0, empty: 5};
}

const getPerformanceRating = (rps: number, avgResponseTime: number): number => {
    const baseRating = 1000;
    const rpsGain = 20;
    const respTimeCost = 120;
    const respTimeGain = 200;

    // RATING
    // For every 5 requests a second, add 250 pts

    // RESPONSE TIME
    // If over 30000ms remove 1000
    // For every 500ms above 3000ms subtract 80 
    // For every 500ms below 3000ms add 150
    // Up to 900 pt add

    return 0;
}


const getPerformanceText = (perfRating: number): string => {
    if (perfRating > 2000) { return "Lightning"; }
    if (perfRating > 1000) { return "Fast"; }
    if (perfRating > 500) { return "Moderate"; }
    return "Slow";
}

const getOverallRating = (healthyRating: number, perfRating: number): number => {
    const baseRating = 5;

    return baseRating;
}

export {
    getHealthyStatusRating,
    getHealthyStatusText,
    getPerformanceRating,
    getPerformanceText,
    getOverallRating,
    getHealthyStatusStars
};
  