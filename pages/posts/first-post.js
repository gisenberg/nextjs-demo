import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>first post.</title>
            </Head>
            <div>
                <h1>First Post</h1>
                <Image src="/images/profile.jpg" height={128} width={128} alt="gisenberg" />
            </div>
            <Link href="/">
                <a>Back</a>
            </Link>
        </div>
    );
}
