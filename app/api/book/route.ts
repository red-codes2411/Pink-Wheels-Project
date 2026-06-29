import { NextResponse } from 'next/server';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
const docClient = DynamoDBDocumentClient.from(client);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const command = new PutCommand({
      TableName: "PinkWheelsBookings",
      Item: {
        bookingId: Date.now().toString(), // Simple unique ID
        createdAt: new Date().toISOString(),
        ...data
      },
    });

    await docClient.send(command);
    return NextResponse.json({ success: true, message: "Booking confirmed!" });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: "Failed to book" }, { status: 500 });
  }
}