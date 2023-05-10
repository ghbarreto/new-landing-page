// Remove all this nonsense below

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

export const fetchContributions = async () => {
    let err, data;

    await fetch(`https://portfolio-api-one.vercel.app/api/contributions`)
        .then(async res => {
            const retrievedData = await res.json();
            return (data = retrievedData);
        })
        .catch(error => {
            console.log(error);
            return (err = error);
        });

    return { err, data };
};

export const fetchContributionHistory = async (body: any) => {
    let isLoading = true,
        err,
        data;

    await fetch(`http://localhost:3030/api/contribution/history`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
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
