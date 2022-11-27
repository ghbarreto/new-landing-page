export const fetchHelper = async (endpoint: string) => {
    let isLoading = true,
        err,
        data;

    await fetch(`${import.meta.env.GITHUB_WEBSITE}${endpoint}/${import.meta.env.GITHUB_USER_NAME}`, {
        method: 'GET',
        headers: { authorization: `token ${import.meta.env.GITHUB_TOKEN}` },
    })
        .then(async res => {
            const retrievedData = await res.json();
            isLoading = false;
            return (data = retrievedData);
        })
        .catch(error => {
            isLoading = false;
            return (err = error);
        });

    return { isLoading, err, data };
};

export const fetchContributions = async (endpoint: string) => {
    let isLoading = true,
        err,
        data;

    await fetch('http://localhost:3030/api/contributions')
        .then(async res => {
            const retrievedData = await res.json();
            isLoading = false;
            return (data = retrievedData);
        })
        .catch(error => {
            isLoading = false;
            return (err = error);
        });

    return { isLoading, err, data };
};

export const fetchContribution = async () => {
    let isLoading = true,
        err,
        data;

    await fetch('http://localhost:3030/api/contribution')
        .then(async res => {
            const retrievedData = await res.json();
            isLoading = false;
            return (data = retrievedData);
        })
        .catch(error => {
            isLoading = false;
            return (err = error);
        });

    return { isLoading, err, data };
};
