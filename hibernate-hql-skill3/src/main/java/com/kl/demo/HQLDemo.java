package com.kl.demo;

import com.kl.entity.Product;
import com.kl.loader.ProductDataLoader;
import com.kl.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import java.util.List;

public class HQLDemo {

    public static void main(String[] args) {

        SessionFactory factory = HibernateUtil.getSessionFactory();
        Session session = factory.openSession();

        // 🔴 RUN THIS ONLY FIRST TIME TO INSERT DATA
        ProductDataLoader.loadData(session);

        // Sorting Example
        sortByPriceAsc(session);

        session.close();
        factory.close();
    }

    // HQL Sorting Method
    public static void sortByPriceAsc(Session session) {

        Query<Product> query =
                session.createQuery("FROM Product ORDER BY price ASC", Product.class);

        List<Product> list = query.list();

        System.out.println("\nProducts Sorted By Price (ASC):");
        for (Product p : list) {
            System.out.println(p);
        }
    }
}