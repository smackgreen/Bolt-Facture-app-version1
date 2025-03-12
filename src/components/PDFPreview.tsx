import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 40
  },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    borderColor: '#000',
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  total: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: 1,
    borderColor: '#000'
  }
})

interface PDFPreviewProps {
  invoiceData: {
    clientName: string
    date: string
    items: Array<{
      description: string
      quantity: number
      price: number
    }>
  }
}

export default function PDFPreview({ invoiceData }: PDFPreviewProps) {
  const total = invoiceData.items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>Invoice</Text>
          <Text>Date: {invoiceData.date}</Text>
          <Text>Client: {invoiceData.clientName}</Text>
        </View>

        {invoiceData.items.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text>{item.description}</Text>
            <Text>{item.quantity} x ${item.price.toFixed(2)}</Text>
            <Text>${(item.quantity * item.price).toFixed(2)}</Text>
          </View>
        ))}

        <View style={[styles.row, styles.total]}>
          <Text>Total</Text>
          <Text>${total.toFixed(2)}</Text>
        </View>
      </Page>
    </Document>
  )
}
